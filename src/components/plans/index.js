import Plan from "./plan";

import './plans.scss';

const Plans = () =>(
    <div className={'Plans'}>
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <div className={'wrapper'}>
            <Plan 
                title={'Free Plan'} 
                features={[
                    'Unlimited Bandwith', 
                    'Encrypted Connection',
                    'No Traffic Logs',
                    'Works on All Devices'
                ]} 
                unit={''}
            />
            <Plan 
                title={'Standard Plan'} 
                features={[
                    'Unlimited Bandwith', 
                    'Encrypted Connection',
                    'No Traffic Logs',
                    'Works on All Devices',
                    'Connect Anyware'
                ]} 
                price={'$9'}
            />
            <Plan 
                title={'Premium Plan'} 
                features={[
                    'Unlimited Bandwith', 
                    'Encrypted Connection',
                    'No Traffic Logs',
                    'Works on All Devices',
                    'Connect Anyware',
                    'Get New Features'
                ]} 
                price={'$12'}
            />
        </div>
    </div>
)

export default Plans;