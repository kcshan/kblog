// import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { message } from 'antd';
import request from 'service/fetch';
import CountDown from 'components/CountDown';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: IProps) => {
  console.log(props);
  const { isShow = false } = props;
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });

  const handleClose = () => {};

  const handleGetVerifyCode = () => {
    // setIsShowVerifyCode(true);
    if (!form?.phone) {
      message.warning('请输入手机号');
      return;
    }

    request.post('/api/user/sendVerifyCode');
  };

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCountDownEnd = () => {
    console.log('结束了');
    setIsShowVerifyCode(false);
  };

  console.log(setForm);

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>Phone Number Login</div>
          <div className={styles.close} onClick={handleClose}>
            x
          </div>
        </div>

        <input
          name="phone"
          type="text"
          placeholder="phone number"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="verify"
            type="text"
            placeholder="verify code"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            {isShowVerifyCode ? (
              <CountDown time={5} onEnd={handleCountDownEnd} />
            ) : (
              'Get Verify Code'
            )}
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          Login
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          Github Login
        </div>
        {/* <div className={styles.loginPrivacy}>
          注册登录即表示同意<a href="javascript:void;"></a>
        </div> */}
      </div>
    </div>
  ) : null;
};

export default Login;
