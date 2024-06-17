import BlogComponent from './BlogComponent';

export default function BlogSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BlogComponent
          href="/noticias"
          title="BLOG"
          description="Datos y noticias para impulsar tu negocio y marca personal"
          icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
        />
        <BlogComponent
          href="/nosotros"
          title="ASESORÍAS"
          description="Personalizadas y confidenciales"
          icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2z"></path></svg>}
        />
        <BlogComponent
          href="/contactanos"
          title="COTIZA NUESTROS SERVICIOS"
          description="Asesorías Valdivia tiene una serie de servicios que pueden ayudarte a llevar negocio al éxito"
          icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.5 0 2.75 1 3.25 2.5a3.501 3.501 0 01-6.5 0C9.25 9 10.5 8 12 8zm0-2a4.5 4.5 0 00-4.5 4.5 4.5 4.5 0 009 0A4.5 4.5 0 0012 6zM6 16.5A5.5 5.5 0 0117.5 12a5.5 5.5 0 011.5 4.5v.5H6v-.5z"></path></svg>}
        />
      </div>
    </div>
  );
}