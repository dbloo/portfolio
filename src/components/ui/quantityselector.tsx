import { StyledButton } from './button'



function QuantitySelector({disabled, quantity, setQuantity}: {disabled:boolean, quantity: number, setPrice: (value: number) => void, setQuantity: (value: number) => void}) {
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <StyledButton disabled = {disabled} onClick = {handleDecrement} color = "black" className = " w-full cursor-pointer "> - </StyledButton>
            <span className={`${disabled == true ? "opacity-50" : ""}tabular-nums`}>{quantity}</span>
            <StyledButton disabled = {disabled} onClick = {handleIncrement} color = "black" className = " w-full cursor-pointer "> +</StyledButton>
        </div>
    );
}

export default QuantitySelector;