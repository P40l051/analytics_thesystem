import styles from '../styles/Home.module.css'
import ReactLoading from 'react-loading';

const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <ReactLoading type={"spinningBubbles"} color={"#000000"} height={'20%'} width={'20%'} />
    </div>
)

export default Loading