const pool = require("../db/connection");

exports.placeOrder = async (req, res) => {
  const { custname, product_id, quantity } = req.body;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 🔹 1. Check product exists
    const [product] = await connection.query(
      "SELECT * FROM products WHERE id = ?",
      [product_id]
    );

    if (product.length === 0) {
      throw new Error("Product not found");
    }

    // 🔹 2. Check stock
    if (product[0].stock < quantity) {
      throw new Error("Insufficient stock");
    }

    const totalAmount = product[0].price * quantity;

    // 🔹 3. Reduce stock
    await connection.query(
      "UPDATE products SET stock = stock - ? WHERE id = ?",
      [quantity, product_id]
    );

    // 🔹 4. Create order
    const [orderResult] = await connection.query(
      "INSERT INTO orders (custname, totalamount) VALUES (?, ?)",
      [custname, totalAmount]
    );

    const orderId = orderResult.insertId;

    // 🔹 5. Create order item
    await connection.query(
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
      [orderId, product_id, quantity]
    );

    await connection.commit();

    res.status(200).json({
      message: "Order placed successfully"
    });

  } catch (error) {

    await connection.rollback();

    res.status(400).json({
      message: error.message
    });

  } finally {

    connection.release();

  }
};