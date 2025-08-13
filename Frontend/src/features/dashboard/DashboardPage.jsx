import {useContext} from 'react'
import TotalClientCard from './TotalClientCard'
import TotalConversionCard from './TotalConversion'
import TotalProposalCard from './TotalProposal'
import ProposalGraph from './ProposalGraph'
import RecentClients from './RecentClients'
import { UserContext } from '../../shared/ClientRedux'
const DashboardPage = () => {
  const {userInfo}=useContext(UserContext);
  console.log(userInfo);
  return (
    <div className='text-white flex flex-col gap-5  h-full'>
        <h1 className='text-3xl font-semibold '>Welcome back,{userInfo?userInfo.name:"Guest"}</h1>
        <div className='flex gap-5  '>
              <TotalClientCard/>
              <TotalConversionCard/>
              <TotalProposalCard/>
        </div>
        <ProposalGraph/>
        <RecentClients/>
    </div>
  )
}

export default DashboardPage