import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { Container, Content, Banner, AnimationContent } from './styles';
import { Button } from '../../components/atoms';
import { InputIcon } from '../../components/molecules';
import api from '../../services/api';
import { SignUpFormData } from './interface';
import { useToast } from '../../hooks';

const SingUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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
      await api.post('/users', data);
      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Você já pode fazer seu logon no GoBarber',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErros(err);
        formRef.current?.setErrors(erros);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
      });
    }
  }, []);

  return (
    <Container>
      <Banner />
      <Content>
        <AnimationContent>
          {' '}
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
          <Link to="/">
            <FiArrowLeft size={22} />
            Voltar para logon
          </Link>
        </AnimationContent>
      </Content>
    </Container>
  );
};

export default SingUp;
