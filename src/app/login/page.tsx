'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import { Amplify } from 'aws-amplify';
import { signIn, confirmSignIn } from "aws-amplify/auth"
import { useTheme } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';



Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_uOo0suwuK',
      userPoolClientId: '7jacuqaqc62ndpebu0i7fotqi9',
    }
  },

})


interface LoginProps {
    email: string;
    password: string;
}

const loginSchema = z.object({
    email: z.string().min(1, 'email obrigatório'),
    password: z.string().min(1, 'senha obrigatória')
})

type loginSchemaProps = z.infer<typeof loginSchema>;

export default function Login () {
  const theme = useTheme();
  const { handleSubmit, formState: { errors }, control } = useForm<loginSchemaProps>({
    defaultValues: {
        email: '',
        password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  console.log(Amplify.getConfig())

  const onSubmit = async ({ email, password }: loginSchemaProps) => {
    console.log(email, password)
    try{
       const { nextStep } = await signIn({ username: 'anderson.ramos.dev@gmail.com', password: 'Ande@1995'})

       console.log(nextStep)
    } catch (error){
        console.error(error)
    }
  }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box display="flex" flexDirection="column" gap={theme.spacing(2)}>
                        <Controller 
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <TextField 
                                    label='email'
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={!!errors.email}
                                    helperText={errors.email?.message as string}
                                />
                            )}
                        />
                        <Controller 
                            name='password'
                            control={control}
                            defaultValue='b&EGIf95'
                            render={({ field }) => (
                                <TextField 
                                    label='password'
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={!!errors.password}
                                    helperText={errors.password?.message as string}
                                />
                            )}
                        />
                        <Button variant="contained" type="submit">
                            Logar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}