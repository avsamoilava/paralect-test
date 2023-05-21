import { Flex, Text, Button, Image } from '@mantine/core';
import Img from '../assets/Frame.png';

export const EmptyPage = () => {
  return (
    <Flex justify={'center'} pt={120} h={'90%'}>
      <Flex direction={'column'} gap={32} align={'center'}>
        <Image src={Img} alt="image" width={240} height={230} />
        <Text color={'#343A40'} fw={700} size={24} lh={1.21}>
          Упс, здесь еще ничего нет!
        </Text>
        <Button variant={'light'} radius={8} p={'10px 24px'} h={42}>
          Поиск Вакансий
        </Button>
      </Flex>
    </Flex>
  );
};
