import { Button, Card, CardBody, Heading, Skeleton, Stack, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import Layout from "../../components/Layout"
import { Hemocentro } from "../../interfaces/hemocentro"
import { MdOutlineMedicalServices, MdOutlineEdit } from "react-icons/md"
import styles from "../home/Home.module.css"
import { useHemocentros } from "../../hooks/queries/hemocentro/useHemocentro"

export default function Home() {

  const { hemocentros, isLoading } = useHemocentros()

  return (
    <Layout>
      <Heading as='h3' size='lg' className={styles.text_space}>Gestão de Hemocentros</Heading>
      <Text fontSize='md' className={styles.text_space}>Por favor selecione um hemocentro para poder editar suas informações </Text>
      {isLoading ? (
        <Stack className={styles.skeleton}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Stack>
      ) : (
        hemocentros?.map((hemocentros: Hemocentro) => (
          <Card key={hemocentros._id} variant='outline' className={styles.card}>
            <CardBody className={styles.card_body}>
              <div className={styles.icon_style}>
                <MdOutlineMedicalServices size={'48px'} />
              </div>

              <div className={styles.container}>
                <Heading as='h5' size='sm'>{hemocentros.nome}</Heading>
                <Text >{hemocentros.cidade} - {hemocentros.estado}</Text>
                <Text>{hemocentros.email}</Text>
              </div>
              <Link  to={`/hemocentro/${hemocentros._id}`}>
                <Button leftIcon={<MdOutlineEdit size={"24px"} />}>Editar</Button>
              </Link>
            </CardBody>
          </Card>
        )
        )
      )}

    </Layout>

  )
}