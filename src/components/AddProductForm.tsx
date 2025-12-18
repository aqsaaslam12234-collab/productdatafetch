

const AddProductForm = () => {
  return (
    <div className="max-w-2xl max-auto p-2">
        <h1 className="text-2xl font-bold text-center mb-2">Add New Product</h1>
        <form className="space-y-5 bg-white p-2 rounded-2xl shadow">
            <div>
                <label className="block font-medium text-left mb-1 " htmlFor="name">name</label>
                <input className="w-full border rounded-lg p-2" type="text" placeholder="Enter your name" />
            </div>
            <div>
                <label className="block font-medium trxt-left mb-1" htmlFor="Price">Price</label>
                <input className="w-full border rounded-lg p-2" type="number" placeholder="20000" />
            </div>
            <div><label htmlFor=""></label></div>
        </form>
      
    </div>
  )
}

export default AddProductForm
