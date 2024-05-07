import SenhaInput from '../../components/inputSenha'
import styles from './Login.module.css'
import { Button, Center, Grid, GridItem, Heading, Input } from "@chakra-ui/react"
import "../../customStyles.css"



export default function Login() {//precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm


    return (
        <>
            <Grid className="grid" templateColumns={'1fr'}>
                <GridItem colSpan={1} rowSpan={1} backgroundColor={'#E31515'} className={styles.background}>
                    <Center>
                        <div className={styles.container}>
                        <img src="src\assets\logoLogin.svg" alt="" />
                            <Heading as='h4' size='md'>Usuário</Heading>
                            <Input background={"#FFFFFF"} placeholder='Digite seu usuário'></Input>
                            <Heading as='h4' size='md'>Senha</Heading>
                            <SenhaInput></SenhaInput>
                            <Button className='botao_primario'>Login</Button>
                        </div>
                    </Center>
                </GridItem>
            </Grid>
        </>
    )
}