import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import contacto from "../assets/Contact/contacto.png"
import rectangle8 from "../assets/Contact/rectangle8.png"
import rectangle9 from "../assets/Contact/rectangle9.png"
import rectangle10 from "../assets/Contact/rectangle10.png"
import "./contactus.css"
import {ToastContainer, toast} from "react-toastify"

export default function ContactUs() {
    const refForm = useRef();
    const Notify = () =>{
        toast ("Sent Successfully", {autoClose: 2000})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(refForm.current);

        const serviceID = "service_3xajirr";
        const templateID = "template_334tz0s"
        // Get values from form element
        const apiKey = "NWpApKxi-u--S_L9D"

        emailjs.sendForm(serviceID, templateID, refForm.current , apiKey)
        .then(result => console.log(result.text))
        .catch((error)=>console.log("Error", error));
    }


  return (
    <div className="contacto  relative rounded-2xl shadow border border-indigo-600 backdrop-blur-3xl bg-gray-claro">
    <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="gap-7">
            <h2 className="text-blue-900 text-3xl left-[261px] top-[28px] absolute font-bold">Get in Touch</h2>
            <p className="left-[261px] top-[79px] absolute text-black text-xs font-normal">Any question or remarks? Let us know!</p>
            <div className='left-[260px] top-[106px] absolute w-96 h-56 flex-col justify-start items-start gap-7 inline-flex'>
            <fieldset className=" w-96 h-10 relative">
                <label className='w-96 h-10 left-0 top-0 absolute bg-white rounded border border-black' htmlFor=""></label>
                <input className="w-52 left-[32.56px] top-[9px] absolute text-black text-xs font-extralight" name='name'  type="text" placeholder='Ej: Oscar Velazquez' required/>
            </fieldset>
            <fieldset className=" w-96 h-10 relative">
                <label className="w-96 h-10 left-0 top-0 absolute bg-white rounded border border-black" name='email'></label>
                <input className="w-64 h-3.5 left-[37.21px] top-[13px] absolute text-black text-xs font-extralight" name='email' id='email' type="email" placeholder='Ej: capital@mind.com' required/>
            </fieldset>
            <fieldset className=" w-96 h-20 relative">
                <label className="w-96 h-20 left-0 top-0 absolute bg-white rounded border border-black" ></label>
                <textarea className="TypeYourMessageHere w-80 left-[20px] top-[20px] absolute text-black text-xs font-extralight" maxLength='500' placeholder='type your message' name="message" id="" cols="50" rows="3" ></textarea>
            </fieldset>
            </div>
        </div>
        <div className=" w-20 h-7 left-[529px] top-[343px] absolute  bg-indigo-600 rounded-lg">
        <button 
        onClick={Notify}
        className="left-[18px] top-[6px] absolute text-white text-xs font-normal">Send</button>
        <ToastContainer/>
        </div>
    </form>
    <div className="informacion">
                <img className="istockphoto" alt="Istockphoto" src={contacto} />
                <div className="bajo-imagen">
                  <img className="rectangle" alt="Rectangle" src={rectangle8} />
                  <img className="img" alt="Rectangle" src={rectangle9} />
                  <img className="rectangle-2" alt="Rectangle" src={rectangle10} />
                  <div className="text-wrapper-5">+54 9 11 683-7023</div>
                  <div className="text-wrapper-6">Luiserbarberan@gmail.com</div>
                  <p className="p">16192 Coastsl Highway  Lewes  Delawere 19958</p>
                </div>
    </div>
    </div>
    
  )
}

//<div className="contacto">
//            <div className="frame">
//              <p className="subtitulo">Any question or remarks? Let us know!</p>
//              <div className="text-wrapper">Get in Touch</div>
//              <div className="inputs">
//                <div className="overlap-group-wrapper">
//                  <div className="overlap-group">
//                    <div className="div">Enter your name</div>
//                  </div>
//                </div>
//                <div className="overlap-group-wrapper">
//                  <div className="overlap-group">
//                    <div className="text-wrapper-2">Enter your email</div>
//                  </div>
//                </div>
//                <div className="mensaje">
//                  <div className="div-wrapper">
//                    <div className="text-wrapper-3">Type your message here</div>
//                  </div>
//                </div>
//              </div>
//              <div className="button">
//                <div className="overlap-2">
//                  <div className="text-wrapper-4">Submit</div>
//                </div>
//              </div>
//              <div className="informacion">
//                <img className="istockphoto" alt="Istockphoto" src={contacto} />
//                <div className="bajo-imagen">
//                  <img className="rectangle" alt="Rectangle" src="rectangle-8.png" />
//                  <img className="img" alt="Rectangle" src="rectangle-9.png" />
//                  <img className="rectangle-2" alt="Rectangle" src="rectangle-10.png" />
//                  <div className="text-wrapper-5">+1 254 8547 956</div>
//                  <div className="text-wrapper-6">sachdeva@coin.sin</div>
//                  <p className="p">3891 Ranchview Dr. Richardson, California 62639</p>
//                </div>
//              </div>
//            </div>
//          </div>