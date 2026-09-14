export function ModalInfo({ SelectedProject, closeModal }) {
  const handleClickCloseButton = () => {
    closeModal();
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-2xl w-[90%] sm:w-[80%] max-w-[800px] shadow-2xl max-h-[85vh] flex flex-col overflow-y-auto lg:text-lg">
        <div className="overflow-hidden rounded-t-xl">
          <img
            className="w-full h-64 sm:h-80 object-cover"
            src={SelectedProject.src}
            alt={SelectedProject.title}
          />
        </div>

        <div className="w-full text-slate-800 dark:text-white p-6 sm:p-8 flex flex-col bg-slate-50 dark:bg-slate-900/90 rounded-b-xl">
          <h3 className="text-2xl sm:text-3xl font-bold self-center pb-1 inline border-b-4 border-emerald-500/60 dark:border-primary-color/60 mb-6 text-slate-900 dark:text-white">
            {SelectedProject.title}
          </h3>

          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-emerald-600 dark:text-primary-color">Description: </span>
              <span className="text-slate-600 dark:text-gray-300">{SelectedProject.description}</span>
            </li>

            <li>
              <span className="font-semibold text-emerald-600 dark:text-primary-color">Technologies: </span>
              <span className="text-slate-600 dark:text-gray-300">{SelectedProject.technologies} </span>
            </li>

            <li>
              <span className="font-semibold text-emerald-600 dark:text-primary-color">Demo: </span>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:underline-offset-4 text-emerald-600 dark:text-emerald-400 font-medium transition-colors"
                href={SelectedProject.demo}
              >
                Click here to see the live project
              </a>
            </li>

            <li>
              <span className="font-semibold text-emerald-600 dark:text-primary-color">Code: </span>
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:underline-offset-4 text-emerald-600 dark:text-emerald-400 font-medium transition-colors"
                href={SelectedProject.code}
              >
                Click here to see the repository
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={handleClickCloseButton}
          className="absolute top-4 right-4 cursor-pointer p-1 rounded-full bg-white/80 dark:bg-slate-950/80 shadow-md hover:scale-110 transition-transform"
        >
          <i className="bx bx-x text-emerald-600 dark:text-primary-color text-[2rem] leading-none"></i>
        </button>
      </div>
    </section>
  );
}
