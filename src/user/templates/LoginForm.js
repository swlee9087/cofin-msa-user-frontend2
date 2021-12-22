
//------------second last v
// import React, { useState } from 'react';
// import { Link as RouterLink, useNavigate  } from 'react-router-dom';
// import { useFormik, Form, FormikProvider } from 'formik';
// import { Icon } from '@iconify/react';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// import * as Yup from 'yup';
// import {} from 'formik'
// import {
//     Link,
//     Stack,
//     Checkbox,
//     TextField,
//     IconButton,
//     InputAdornment,
//     FormControlLabel
//   } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// import UserLost from './UserLost';
// import UserJoin from 'user';
// import Navigation from 'common/Navigation';

// export default function UserLogin() {
//     const navigate = useNavigate();
//     const [showPassword, setShowPassword] = useState(false);
//     const {user_email, password} = `login`

//     const LoginSchema = Yup.object().shape({
//         user_email: Yup.string().user_email('메일주소 형식에 맞게 입력해주세요').required('메일 주소를 입력해주세요'),
//         password: Yup.string().required('비밀번호를 입력해주세요')
//     })
//     const formik = useFormik({
//         initialValues: {
//             user_email: "",
//             password:"",
//             remember: true
//         },
//         validationSchema: LoginSchema,
//         onSubmit: () =>{
//             navigate('/{Navigation}', {replace: true});            
//         }
//     })
//     const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps}=formik;

//     const handleShowPassword=()=>{
//         setShowPassword((show)=>!show);
//     }

//     return(
//         <FormikProvider value={formik}>
//       <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
//         <Stack spacing={3}>
//           <TextField
//             fullWidth
//             autoComplete="email"
//             type="user_email"
//             label="메일 주소"
//             {...getFieldProps('user_email')}
//             error={Boolean(touched.user_email && errors.user_email)}
//             helperText={touched.user_email && errors.user_email}
//           />

//           <TextField
//             fullWidth
//             autoComplete="current-password"
//             type={showPassword ? 'text' : 'password'}
//             label="비밀번호"
//             {...getFieldProps('password')}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleShowPassword} edge="end">
//                     <Icon icon={showPassword ? eyeFill : eyeOffFill} />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }}
//             error={Boolean(touched.password && errors.password)}
//             helperText={touched.password && errors.password}
//           />
//         </Stack>

//         <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//           <FormControlLabel
//             control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
//             label="로그인 상태 유지"
//           />

//           <Link component={UserLost} variant="subtitle2" to="#">
//             비밀번호 찾기
//           </Link>
//         </Stack>

//         <LoadingButton
//           fullWidth
//           size="large"
//           type="submit"
//           variant="contained"
//           loading={isSubmitting}
//         >
//           로그인
//         </LoadingButton>
//       </Form>
//     </FormikProvider>
//     )

// }
