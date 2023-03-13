import { BrowserRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import ContentComponent from '../Components/Content/ContentComponent'
import axios from 'axios';
import MenuComponent from '../Components/Menu/MenuComponent'
import { useCookies } from 'react-cookie';
import RequestCode from './StarterPage/RequestCode';
import VerifyCode from './StarterPage/VerifyCode';
import { url } from '../common/Constants';
import useAxios from '../hooks/useAxios';
import LoadingHandler from '../common/LoadingHandler';

function App() {


  const [email, setEmailValue] = useState();
  const [cookies, setCookies, removeCookie] = useCookies(["verification"]);
  const [codeValue, setCodeValue] = useState();
  const [user, setUserValue] = useState();

  const [view, setView] = useState(cookies["state"] || 1)
  const [fooder, setFooder] = useState(cookies["state"])

  function GetExpiresDate() {
    var date = new Date();
    date.setTime(date.getTime() + (7200 * 1000));
    return date;
  }

  const generateCode = (event) => {
    axios.post(url + '/api/smtp/sendemail/verification/send', { email }, {
      headers: {
        'ContentType': 'application/json'
      }
    })
      .then(response => {
        setCookies("userEmail", email, {
          path: "/",
          expires: GetExpiresDate()
        })
        setCookies("emailSent", true, {
          path: "/",
          expires: GetExpiresDate()
        })
        setCookies("state", 2)
        setView(2)
        console.log(response);
        window.location.href = "/sections"
      })
      .catch(error => {
        console.log(error);
      })

  }

  const verifyCode = () => {
    axios.get(url + '/api/smtp/sendemail/verification', { params: { email: cookies["userEmail"], code: codeValue } }, {
      headers: {
        'ContentType': 'application/json'
      }
    })
      .then(res => {
        if (res.status != 204) {
          setUserValue(res.data);
          setCookies("state", 3, {
            path: "/",
            expires: GetExpiresDate()
          });
          setView(3)

          setFooder(!fooder)
          if (res.data) {
            setCookies("loggedIn", true, {
              path: "/",
              expires: GetExpiresDate()
            });
            window.location.href = "/sections"
          }
        }
        else {
            console.log("The verification code is wrong!")
        }
      }
      )
      .catch(error => {
        console.log(error)
      })
  }


  const deleteCookies = () => {
    removeCookie("emailSent");
    removeCookie("loggedIn");
    removeCookie("userEmail");
    removeCookie("state");
    removeCookie("admin");
    window.location.reload(false);
  }

  const {data, loading} = useAxios({
    method:'get',
    url:'/api/users/email/'+cookies["userEmail"]
  })

  return (
    <>
      {view == 1 && (<RequestCode generateCode={generateCode} setEmailValue={setEmailValue} />)}
      {view == 2 && (<VerifyCode verifyCode={verifyCode} deleteCookies={deleteCookies} setCodeValue={setCodeValue} />)}
      {view == 3 && (
        <BrowserRouter>
          <div className='flex justify-center w-full h-full bg-sky-100'>
            {loading?(
              <LoadingHandler/>
            ):(
              <>
            <MenuComponent userData = {data}/>
            <ContentComponent />
            </>
            )}
          </div>
        </BrowserRouter>
      )
      }
    </>
  )

}

export default App
