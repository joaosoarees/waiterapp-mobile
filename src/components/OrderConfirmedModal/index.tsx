import { Modal } from 'react-native';
import { Text } from '../Text';
import { Container, OkButton } from './styles';
import { CheckCircle } from '../Icons/CheckCircle';

type OrderConfirmedModalProps = {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle />

        <Text
          size={20}
          weight='600'
          color="#fff"
          style={{marginTop: 12 }}
        >
          Pedido confirmado
        </Text>

        <Text
          opacity={0.9}
          color="#fff"
          style={{ marginTop: 4 }}
        >
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#d73035" weight='600'>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}