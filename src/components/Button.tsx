type ButtonVarients = 'primary' | 'inverted' | 'outline' | 'inverted-outline';

type ButtonProps = {
    variant?: ButtonVarients;
    className?: string;
    children?: string;
}

const colors: Record<ButtonVarients, React.CSSProperties> = {
    'primary': {
        backgroundColor: 'white',
        color: '#0A4C70',
        border: 'none'
    },
    'inverted': {
        background: '#0A4C70',
        color: 'white',
        border: 'none'
    },
    'outline': {
        background: 'none',
        color: 'white',
        border: '1px solid white'
    },
    'inverted-outline': {
        background: 'none',
        color: '#0A4C70',
        border: '1px solid #0A4C70'
    }
}

export function Button({ variant = 'primary', className, children }: ButtonProps) {
    const style = colors[variant]

    return (
        <button style={{
            ...style,
            width: '10rem', 
            height: '3rem', 
            marginRight: '5px',
            borderRadius: '6px',
            cursor: 'pointer'}} 
            name={children?.toString().trim()}
            className={className}
            >{children}</button>
    )
}