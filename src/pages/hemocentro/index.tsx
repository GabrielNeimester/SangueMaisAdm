import {Heading, Input, Switch, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useHemocentro } from "../../hooks/queries/hemocentro/useHemocentro";

export default function HemocentroPagina() {

    const { id } = useParams()
    const {hemocentro, isLoading } = useHemocentro(id)

  return (
    <Layout>
      <Heading as='h3' size='lg'>Editar Hemocentro</Heading>
      {hemocentro && (
        <div>
        <Input value={hemocentro.nome}></Input>
        <Input value={hemocentro.bairro}></Input>
        <Input value={hemocentro.cidade}></Input>
        <Input value={hemocentro.cnpj}></Input>
        <Input value={hemocentro.email}></Input>
        <Input value={hemocentro.estado}></Input>
        <Input value={hemocentro.telefone}></Input>
        <Text fontSize='md'>Hemocentro Ativo?</Text>
        <Switch id='hemocentro_status' isChecked={hemocentro.ativo} />
        </div>
      )}
    </Layout>

  )
}