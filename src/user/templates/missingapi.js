import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { addUserAction } from "reducers/user.reducer";
import { UserJoin } from 'user';

const theme = createTheme();

export default function UserJoin() {
    const [user, setUser] = useState({
        user_email: '',
        username:'',
        password: '',
        user_name: '',
        user_birthday: '',
        user_sex:'',
        user_phone:'',
        user_address:'',
        user_vaccinated:'',
        vaccine_type:''
    })
    const {user_email, username, password, 
        user_name, user_birthday, user_sex, user_phone, 
        user_address, user_vaccinated, vaccine_type} = `user`
    
    const handleSubmit = e => {
        e.preventDefault();
        alert(`가입 회원정보: ${JSON.stringify(user)}`)
        UserJoin({user})
        .then(res => {alert(`가입 완료: ${res.data.result}`)})
        .catch(err => {alert(`가입 실패: ${err}`)})
        
    }
    
    const handleChange =e=>{
        e.preventDefault()
        const{value,name}=e.target
        setUser({...user,[name]:value})    
      }
 
    const RegisterSchema = Yup.object().shape({
    user_email: Yup.string().email('메일 형식에 맞게 입력해주세요').required('메일 주소를 입력해주세요'),
    password: Yup.string().required('비밀번호 6 ~ 12자 이내로 작성해주세요').min(6, '6 ~ 12자 이내로 작성해주세요'),  
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
    username: Yup.string().required('아이디 6 ~ 12자 이내로 작성해주세요').min(6, '6 ~ 12자 이내로 작성해주세요'),
    // user_birthday: Yup.string().required('생년월일 8자리 입력해주세요').min(8),
    // user_sex: Yup.string().required(),
    // user_phone: Yup.string().required('연락처 11자리 입력해주세요'),
    // user_address: Yup.string().required(),
    // user_vaccinated: Yup.string().required('백신 접종완료 여부를 알려주세요'),
    // vaccine_type: Yup.string()        
    })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="">
        <CssBaseline enableColorScheme/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="username"
              type="text"
              id="username"
              value = {username}
              onChange = {handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value = {password}
              onChange = {handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="name"
              type="text"
              id="name"
              value = {name}
              onChange = {handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="text"
              label="Email Address"
              name="email"
              value = {email}
              autoFocus
              onChange = {handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="birth"
              label="birth"
              type="text"
              id="birth"
              value = {birth}
              onChange = {handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="address"
              type="text"
              id="address"
              value = {address}
              onChange = {handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
