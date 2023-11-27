
import { useDentistaStates } from '../Context/DentistaContext'
import Card from './Card'

const DentistaList = () => {
  
  

  const {state} = useDentistaStates()
  console.log(state);
  return (
    <div>
        {state.dentistaList.map(users => <Card key={users.id} users={users}/>)}
    </div>
  )
}

export default DentistaList