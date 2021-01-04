import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { Container, Content, Banner } from './styles';
import { Button } from '../../components/atoms';
import { InputIcon } from '../../components/molecules';

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const erros = getValidationErros(err);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Banner />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <InputIcon icon={FiUser} name="name" placeholder="Nome" />
          <InputIcon icon={FiMail} name="email" placeholder="E-mail" />
          <InputIcon
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="logon">
          <FiArrowLeft size={22} />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
