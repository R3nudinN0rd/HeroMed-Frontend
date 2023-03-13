import React from "react"
import {url} from '../../common/Constants';

function LoginPage(){

    
  const [emailValue, setEmailValue] = useState();
  const [codeValue, setCodeValue] = useState();
  const [user, setUserValue] = useState();
  const [cookies, setCookies, removeCookie] = useCookies(["verification"]);
 
  function GetExpiresDate() {
    var date = new Date();
    date.setTime(date.getTime() + (7200 * 1000));

    return date;
  }
    const generateCode = (event) => {
        axios.post(url+'/api/smtp/sendemail/verification/send', { emailValue }, {
          headers: {
            'ContentType': 'application/json'
          }
        })
          .then(response => {
            setCookies("emailSent", true,{
              path:"/",
              expires: GetExpiresDate()
            })
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
      }

      const verifyCode = () =>{

        axios.get(url+'/api/smtp/sendemail/verification', {params:{email: emailValue, code:codeValue}},{
          headers:{
            'ContentType': 'application/json'
          }
        })
        .then(res =>{
          setUserValue(res.data);
          console.log(res.response);
        })
        .catch(error => {
          console.log(error)
        })
        
    
        setCookies("loggedIn", true, {
          path: "/",
          expires: GetExpiresDate()
        });
    
        console.log(user)
      }

    return (
        <div className='flex w-row w-full h-full justify-center'>
        <div className="flex flex-row leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium pt-1">
          <span className="text-lg text-bold font-medium text-center"> General information </span>
        </div>
        <div className='flex flex-row w-full mb-4 md:justify-between'>
          <div className='flex flex-row max-h-5 w-96'>
            <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' type='email' name='email' id='email' onChange={(e) => setEmailValue(e.target.value)} required />
            <div className='bg-transparent hover:bg-blue-200 rounded-full py-2 hover:px-6 px-5 text-black duration-500' type='submit' onClick={() => generateCode()}>Request</div>
          </div>
        </div>
        <div className='flwx flex-row w-full justify-center'>
        <div className="flex flex-row leading-5 min-h-[50px] w-[240px] text-ellipsis max-h-[150px] text-description-text font-medium pt-1">
            <span className="text-lg text-bold font-medium text-center"> Verify</span>
          </div>
          <div className='flex flex-row w-full mb-4 md:justify-between'>
            <div className='flex flex-row max-h-5 w-96'>
              <input className='border text-center rounded-full py-2 px-3 text-grey-darkest' type='email' name='email' id='email' onChange={(e) => setCodeValue(e.target.value)} required />
              <div className='bg-transparent hover:bg-blue-200 rounded-full py-2 hover:px-6 px-5 text-black duration-500' type='submit' onClick={() => verifyCode()}>Request</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginPage