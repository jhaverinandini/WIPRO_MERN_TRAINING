import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from '../../my_website_react/src/components/Footer'
import Card from '../../my_website_react/src/components/Card'
import MyButton from '../../my_website_react/src/components/Button'
import './App.css'
function App() {

  return (
    <>
      <div>
        <Header />
        <h3>Hi , This is the app content.</h3>
        <p> React app content can be added here.</p>
        <div className='flex flex-wrap'>
        <Card cardTitle="React Js Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Full Stack Java Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MEAN Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MERN Course" cardDescription="Module frontend course for 40 days"></Card>
         <Card cardTitle="Dev OPs Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Cloud Computing Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Dot Net Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Python Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Azure  Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Angular Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Analyst Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Science Course" cardDescription="Module frontend course for 40 days"></Card>
        </div>
       
        <Footer />
        
      </div>
      
    </>
  )
}
export default App