import { useNavigate } from 'react-router-dom';
import * as C from '../../styles/ConfirmModal.styled';

const ConfirmModal = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Text>지원이 완료되었습니다</C.Text>
      <C.Navigate
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </C.Navigate>
    </C.Container>
  );
};

export default ConfirmModal;
