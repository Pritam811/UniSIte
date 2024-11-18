

export const Opinion = () => {
    console.log(Data)
    return (
        <div className='o-card slider ul'>
            {Data.map((val, index) => {
                return (
                    <Opinions
                        key={index}
                        image={val.image}
                        title={val.title}
                        dept={val.dept}
                        desc={val.desc}
                        showButtons={index === 0}
                    />


                )
            })}
        </div>
    )
}
