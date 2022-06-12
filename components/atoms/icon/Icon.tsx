import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IconProps {
    icon: IconProp,
    className?: string,
    size?: SizeProp
} 

export const Icon = ({ 
    icon, 
    className, 
    size
}: IconProps) => {

    return <FontAwesomeIcon icon={icon} 
        className={className} 
        size={size} />
}