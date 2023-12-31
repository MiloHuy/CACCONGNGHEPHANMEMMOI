import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import { SSOCOOKIES } from 'constants/app.const';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from 'services/user.svc';

const SidebarBody = (props) => {
    const { icons, className } = props
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logoutUser()
    }

    const handleNaviageSidebar = (link) => {
        if (link === '/logout') {
            navigate('/login')
            handleLogout()
            Cookies.remove(SSOCOOKIES.access)
        }
        else {
            navigate(link)
        }
    }

    return (
        <div className={clsx('w-full h-full', className)}>
            <div className='w-full h-full flex flex-col gap-4 p-2'>
                {icons.map((item) => {
                    return (
                        <div key={item.name} className='flex flex-row gap-2'>
                            <Button
                                className='w-full flex justify-start'
                                color="default"
                                variant="bordered"
                                startContent={item.icon}
                                onClick={() => handleNaviageSidebar(item.link)}
                            >
                                <h1 className='text-sm text-black dark:text-white font-bold font-merriweather text-center'>
                                    {item.name}
                                </h1>
                            </Button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default SidebarBody
