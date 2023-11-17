import React, { useEffect } from 'react';
import backgroud from '../../images/home-phones.png';
import phone1 from '../../images/phone1.png';
import phone2 from '../../images/phone2.png';
import phone3 from '../../images/phone3.png';
import phone4 from '../../images/phone4.png';
import './styles.scss';

const Login_phone = () => {
  let ArrayEl = document.getElementsByClassName('slide');
  let x = 0; //xMax = ArrayEl length
  useEffect(() => {
    var sldie = setInterval(() => {
      if (x > 3) {
        x = 0;
      }
      for (var i = 0; i < 4; i++) {
        if (i === x) {
          ArrayEl[i].classList.add('active');
        } else {
          if (ArrayEl[i].classList.contains('active')) {
            ArrayEl[i].classList.remove('active');
          }
        }
      }
      x++;
      return () => clearInterval(sldie);
    }, 5000);
  }, []);

  return (
    <div className="slide_img" style={{ backgroundImage: `url(${backgroud})` }}>
      <img className="slide active" alt="phone1" src={phone1} />
      <img className="slide " alt="phone1" src={phone2} />
      <img className="slide" alt="phone1" src={phone3} />
      <img className="slide" alt="phone1" src={phone4} />
    </div>
  );
};

export default Login_phone;
