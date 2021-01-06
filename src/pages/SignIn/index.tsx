import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks';
import logo from '../../assets/logo.svg';
import { Container, Content, Banner } from './styles';
import { Button } from '../../components/atoms';
import { InputIcon } from '../../components/molecules';
import getValidationErros from '../../utils/getValidationErrors';
import { SignInFormData } from './interface';

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();
  console.log(user);
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const erros = getValidationErros(err);
        formRef.current?.setErrors(erros);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <InputIcon icon={FiMail} name="email" placeholder="E-mail" />
          <InputIcon
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="forgot">
          <FiLogIn size={22} />
          Criar conta
        </a>
      </Content>
      <Banner />
    </Container>
  );
};

export default SingIn;
