import { View, Text } from 'react-native';
import Categories from './assistanceDetail/categories';
import FoundationItem from './assistanceDetail/foundationItem';
import SearchBar from './assistanceDetail/searchBar';

export default function Assistance() {
    return (
      <View>
        <SearchBar />
        <Categories />
        <FoundationItem foundationData={[{image_url:'https://media.istockphoto.com/photos/mature-therapist-shakes-finger-and-lectures-young-female-client-picture-id1342284464?b=1&k=20&m=1342284464&s=170667a&w=0&h=FChAgOcB1FtbbSxyCTgxBpx-1frrPd6RlV7mbCFxbtg=', name:'Hospital for Therapy', rating:'9/10'},{image_url:'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=600', name:'Hospital for Therapy', rating:'9/10'},{image_url:'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600', name:'Hospital for Therapy', rating:'9/10'}]} />
  
      </View>
    );
  }
  