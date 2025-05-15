export const CodeWindow = ({title, children}) => {
  return (
    <div className="w-full p-6 md:p-8 lg:p-10 pt-0 md:pt-0 lg:pt-0 top-[-1rem] relative">
      <div className="gradient-border">
        <div className="code-window bg-[#091121]">
          <div className="window-header">
            <div className="window-dot bg-red-500"></div>
            <div className="window-dot bg-yellow-500"></div>
            <div className="window-dot bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
              <i className="fas fa-code"></i>
              {title}
            </span>
          </div>
          <pre className="language-javascript whitespace-pre-wrap">
            <code className="language-javascript whitespace-pre-wrap">{children}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}