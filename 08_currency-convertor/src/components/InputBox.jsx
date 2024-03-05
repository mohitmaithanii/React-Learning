function InputBox({
	label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
    className = "",
}) {
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			<div className="w-1/2">
				<label className="inline-block mb-2 text-black/40">{label}</label>
				<input
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
				/>
			</div>
			<div className="flex flex-wrap justify-end w-1/2 text-right">
				<p className="w-full mb-2 text-black/40">Currency Type</p>
				<select className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                
                    value={selectCurrency} 
                    disabled={currencyDisable}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target)}
                >
					{currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
