export function Button({ style = {backgroundColor: 'white', color: '#0A4C70', borderColor: 'none', border: 'none'}, className = '', children }: React.ComponentProps<'div'>) {
    // transparent + white border + white text
    if (style.borderColor === 'white') {
        style.background = 'none';
        style.color = 'white';
        style.border = '1px solid white';
    }
    
    // transparent + blue border + blue text
    if (style.borderColor === '#0A4C70') {
        style.background = 'none';
        style.color = '#0A4C70';
        style.border = '1px solid #0A4C70';
    }

    // blue background + blue text
    if (style.backgroundColor === '#0A4C70') {
        style.border = 'none';
        style.color = '#0A4C70';
    }

    return (
        <button style={{
            ...style,
            width: '10rem', 
            height: '3rem', 
            marginRight: '5px',
            borderRadius: '6px'}} 
            name={children?.toString().trim()}
            className={className}>{children}</button>
    )
}