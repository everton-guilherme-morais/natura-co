export default function detailsProduct({
  params
}: {
  params: {id: string}
}) {
  return (
    <div>{params.id}</div>
  )
}