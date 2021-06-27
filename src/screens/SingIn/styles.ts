import styled from 'styled-components/native';
import image from '../../assets/illustration.png';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageHome = styled.Image.attrs({
  source: image,
})``;

export const Title = styled.Text``;

export const Input = styled.TextInput``;