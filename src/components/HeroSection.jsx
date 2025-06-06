export const HeroSection = () => {
    return(
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg md:text-xl mb-8">Explore our features and services</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </div>
        </section>
    )
}
