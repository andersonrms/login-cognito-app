'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import { Amplify } from 'aws-amplify';
import { signUp } from "aws-amplify/auth"
import { useTheme } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginProps {
    email: string;
    password: string;
}

const loginSchema = z.object({
    email: z.string().min(1, 'email obrigatório'),
    password: z.string().min(1, 'senha obrigatória')
})

type loginSchemaProps = z.infer<typeof loginSchema>;

export default function Register () {
  const theme = useTheme();
  const { handleSubmit, formState: { errors }, control } = useForm<loginSchemaProps>({
    defaultValues: {
        email: '',
        password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  /*const onSubmit = async ({ email, password }: loginSchemaProps) => {
    console.log(email, password)
    try{
       const { isSignedIn } = await signIn({ username: 'anderson.ramos.dev@gmail.com', password: 'b&EGIf95' })

       console.log(isSignedIn)
    } catch (error){
        console.error(error)
    }
  }*/

  const 

    return (
        <Box
            width="100%"
            marginTop={theme.spacing(12)}
            padding={theme.spacing(2)}
            display="flex"
            flexDirection="column"
            justifyContent=""
            alignItems="center"
        >
            <Typography>Login</Typography>
            <Box marginTop={theme.spacing(4)}>
                <Button></Button>
            </Box>
        </Box>
    )
}