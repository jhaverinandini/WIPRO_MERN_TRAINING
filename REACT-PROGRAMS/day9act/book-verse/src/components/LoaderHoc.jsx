import { useState } from "react";

function withLoader(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [loading, setLoading] = useState(false);

    return (
      <>
        {loading && <div className="loader">⏳ Loading books...</div>}
        <WrappedComponent {...props} showLoader={setLoading} />
      </>
    );
  };
}

export default withLoader;