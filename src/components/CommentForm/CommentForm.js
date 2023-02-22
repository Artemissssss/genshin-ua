import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function CommentForm({router,route}) {
  const captch = useRef()
    const comment = (e) => {
        e.preventDefault();
        if(captch.current.getValue()){
          fetch(`/api/comments${router}`, {
            method: 'POST',
            body: JSON.stringify({"name":e.target[0].value,"text":e.target[1].value,"route":route}),
            headers: {
            'Content-Type': 'application/json'
            }
            });
          e.target.reset()
        }else{
          alert("Пройдіть перевірку reCaptcha")
        }
    }
  return (<>
    <form className="commentFrom" onSubmit={comment}>
<input className="commentFromName" type="text" name="name" placeholder="Ім’я" required maxLength="30"/>
<textarea className="commentFromText"  name="text" placeholder="Коментар" required maxLength="200"></textarea>
<ReCAPTCHA
    sitekey="6LdDFZwkAAAAADmk6YJPel8e03eDXLVGuKUS_ELw"
    ref={captch}
  />
<input className="commentFromBtn" type="submit" name="submit" value="Надіслати"/>
    </form>

    </>
  )
}
export default CommentForm