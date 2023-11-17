import Form_login from '../form_login';
import { Link } from 'react-router-dom';
import google from '../../images/googlePlay.png';
import microsoft from '../../images/Microsoft.png';
import './styles.scss';
const Content_right_login = () => {
  return (
    <>
      <Form_login />
      <div className="content_right_mid">
        <p className="content_right_mid_title">
          Bạn chưa có tài khoản ư?{' '}
          <Link className="content_right_mid_subcribe" to="#!">
            Đăng ký
          </Link>
        </p>
      </div>
      <p className="content_right_mid_dowload_title">Tải ứng dụng</p>
      <div className="content_right_bottom">
        <Link to="#!">
          <img className="google" alt="google" src={google} />
        </Link>
        <Link to="#!">
          <img alt="microsoft" className="microsoft" src={microsoft} />
        </Link>
      </div>
    </>
  );
};
export default Content_right_login;
