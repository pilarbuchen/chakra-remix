import { createBoard } from '@wixc3/react-board';
import MyChakraComponent from '../../../src/components/my-chakra-component/my-chakra-component';

export default createBoard({
    name: 'MyChakraComponent',
    Board: () => <MyChakraComponent />,
});
