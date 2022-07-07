// import type { NextPage } from 'next';
import { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: IProps) => {
  console.log(props);
  const { isShow = false } = props;
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });

  const handleClose = () => {};

  const handleGetVerifyCode = () => {};

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  console.log(setForm);

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div>手机号登录</div>
        <div className={styles.close} onClick={handleClose}>
          x
        </div>
        <input
          name="phone"
          type="text"
          placeholder="请输入手机号"
          value={form.phone}
        />
        <div className={styles.verifyCodeArea}>
          <input
            name="phone"
            type="text"
            placeholder="请输入验证码"
            value={form.verify}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            获取验证码
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          登录
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          使用 Github 登录
        </div>
        {/* <div className={styles.loginPrivacy}>
          注册登录即表示同意<a href="javascript:void;"></a>
        </div> */}
      </div>
    </div>
  ) : null;
};

export default Login;
