export default function Card({ title, url, desc }) {
    return (

        <div className="shadow hover:shadow-md  pl-1 pt-1">
            <a className="bg-white text-left" href={url}  target="_blank" rel="noreferrer">
                <div className="text-left flex flex-col   items-center p-4  bg-white h-full  gap-2">
                    <h2 className="text-2xl font-medium"> {title}</h2>
                    <p className="line-clamp-3">{desc}</p>
                </div>
            </a>
        </div>

    )
}