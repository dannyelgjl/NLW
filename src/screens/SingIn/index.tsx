import React, { useState } from 'react';
import {
  Container,
  Title,
  Input,
  ImageHome,
  Content,
  SubTitle,
} from './styles';

const SingIn: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <ImageHome />
      <Content>
        <Title>
          Organize {`\n`}
          seus jogatinas {`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>
      </Content>

      {/* <Input
        value={text}
        onChangeText={setText}
        placeholder="Digite algo"
      /> */}
    </Container>
  );
}

export default SingIn;