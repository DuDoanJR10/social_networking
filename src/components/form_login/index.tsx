import { FacebookFilled } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const Form_login = () => {
  return (
    <div className="top">
      <i
        className="logo"
        data-visualcompletion="css-img"
        aria-label="Instagram"
        role="img"
      ></i>
      <Form
        className="form_login"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            style={{
              width: '150%',
              borderColor: '#dbdbdb',
              backgroundColor: '#fafafa',
            }}
            placeholder="Số điện thoại, tên người dùng hoặc email"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            style={{
              width: '150%',
              borderColor: '#dbdbdb',
              backgroundColor: '#fafafa',
            }}
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            style={{
              backgroundColor: '#4cb5f9',
              width: '150%',
              transform: ' translateX(-95px)',
            }}
            type="primary"
            htmlType="submit"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <span className="or">
        <span className="street"></span>
        <p>HOẶC</p>
        <span className="street"></span>
      </span>
      <Link to="#!" className="orther_login">
        <FacebookFilled style={{ marginRight: '10px' }} />
        Đăng nhập bằng facebook
      </Link>
      <p className="forgot_pass">Quên mật khẩu?</p>
    </div>
  );
};
export default Form_login;
