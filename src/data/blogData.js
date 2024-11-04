
export const blogPosts = [
    {
      id: 1,
      title: "React'te State Yönetimi",
      author: "Ahmet Yılmaz",
      date: "2024-03-15",
      content: `
        State yönetimi, modern web uygulamalarının en önemli konularından biridir. React'te state yönetimi için birçok farklı yaklaşım bulunmaktadır.
  
        ## useState Hook'u
  
        useState, React'in en temel state yönetim aracıdır. Basit state'ler için mükemmel bir çözüm sunar.
  
        ## useReducer
  
        Daha karmaşık state mantığı için useReducer kullanabilirsiniz. Redux benzeri bir yapı sunar.
  
        ## Context API
  
        Prop drilling sorununu çözmek için Context API kullanılabilir. Global state yönetimi için idealdir.
      `
    },
    {
      id: 2,
      title: "Node.js ile REST API Geliştirme",
      author: "Mehmet Demir",
      date: "2024-03-10",      content: `
        REST API'ler modern web uygulamalarının temel yapı taşlarından biridir. Bu yazıda Node.js ile API geliştirme sürecini inceleyeceğiz.
  
        ## Express.js Kurulumu
  
        İlk adım olarak Express.js framework'ünü projemize eklemeliyiz.
  
        ## Routing Yapısı
  
        Express.js'te routing yapısının nasıl oluşturulacağını ve best practice'leri öğrenelim.
  
        ## Middleware Kullanımı
  
        Middleware'ler API'mizin önemli bir parçasıdır. Authentication, logging gibi işlemler için kullanılır.
      `
    },
    {
      id: 3,
      title: "TypeScript ile Güvenli Kod Yazımı",
      author: "Zeynep Kaya",
      date: "2024-03-05",
      content: `
        TypeScript, JavaScript'e tip güvenliği ekleyerek daha güvenli kod yazmamızı sağlar.
  
        ## Neden TypeScript?
  
        JavaScript projelerinizde karşılaşabileceğiniz tip hatalarını önlemek için TypeScript kullanabilirsiniz.
  
        ## Temel Tipler
  
        TypeScript'te string, number, boolean gibi temel tiplerin nasıl kullanıldığını öğrenelim.
  
        ## Interface ve Type
  
        Interface ve Type tanımlamaları ile kendi tiplerininizi nasıl oluşturacağınızı görelim.
      `
    },
    {
      id: 4,
      title: "Modern CSS Teknikleri",
      author: "Ayşe Yıldız",
      date: "2024-03-01",
      content: `
        Modern CSS, web geliştirmenin önemli bir parçasıdır. Flexbox, Grid ve diğer modern özellikleri inceleyelim.
  
        ## Flexbox Layout
  
        Flexbox ile sayfa düzeni oluşturmanın temel prensiplerini öğrenelim.
  
        ## CSS Grid
  
        Grid sistemi ile karmaşık sayfa düzenlerini nasıl oluşturabileceğimizi görelim.
  
        ## CSS Variables
  
        Custom property'ler ile CSS'te değişken kullanımını inceleyelim.
      `
    },
    {
        id: 5,
        title: "Docker ile Mikroservis Mimarisi",
        author: "Can Özkan",
        date: "2024-02-28",
        content: `
          Mikroservis mimarisi, modern uygulamaların ölçeklenebilirliği için kritik öneme sahiptir.
          
          ## Docker Nedir?
          Container teknolojisinin temellerini ve Docker'ın çalışma prensiplerini anlayalım.
          
          ## Mikroservis Mimarisi
          Monolitik mimari yerine neden mikroservis mimarisini tercih etmeliyiz?
          
          ## Docker Compose
          Birden fazla container'ı yönetmek için Docker Compose kullanımını öğrenelim.
        `
      },
      {
        id: 6,
        title: "Next.js 14 ile Server Side Rendering",
        author: "Elif Demir",
        date: "2024-02-25",
        content: `
          Next.js 14, React uygulamalarında server side rendering için güçlü özellikler sunar.
          
          ## Server Components
          React Server Components ile performans optimizasyonu nasıl yapılır?
          
          ## App Router
          Next.js 14'ün yeni routing sistemi ve özellikleri nelerdir?
          
          ## Data Fetching
          Server ve client tarafında veri çekme stratejileri.
        `
      },
      {
        id: 7,
        title: "TailwindCSS ile Modern UI Tasarımı",
        author: "Berna Yılmaz",
        date: "2024-02-20",
        content: `
          TailwindCSS, utility-first yaklaşımı ile UI geliştirme sürecini hızlandırır.
          
          ## Utility-First CSS
          TailwindCSS'in temel felsefesi ve avantajları nelerdir?
          
          ## Responsive Tasarım
          Farklı ekran boyutları için nasıl tasarım yapılır?
          
          ## Dark Mode
          TailwindCSS ile kolay dark mode implementasyonu.
        `
      },
      {
        id: 8,
        title: "MongoDB ve Mongoose ile Veritabanı Yönetimi",
        author: "Deniz Kaya",
        date: "2024-02-15",
        content: `
          NoSQL veritabanları modern uygulamalarda sıkça tercih edilmektedir.
          
          ## MongoDB Temelleri
          Document-based veritabanı yapısı ve temel CRUD işlemleri.
          
          ## Mongoose Schema
          Mongoose ile veri modellemesi ve validation işlemleri.
          
          ## Aggregation Pipeline
          Karmaşık sorguları aggregation pipeline ile nasıl yazarız?
        `
      },
      {
        id: 9,
        title: "GitHub Actions ile CI/CD Pipeline",
        author: "Murat Arslan",
        date: "2024-02-10",
        content: `
          CI/CD pipeline'ları modern yazılım geliştirme süreçlerinin vazgeçilmez parçasıdır.
          
          ## Workflow Oluşturma
          GitHub Actions ile ilk workflow nasıl oluşturulur?
          
          ## Otomatik Test ve Deploy
          Test ve deployment süreçlerinin otomatizasyonu.
          
          ## Secrets Management
          Hassas bilgilerin güvenli bir şekilde yönetimi.
        `
      },
      {
        id: 10,
        title: "Vue 3 ile Reactive Programlama",
        author: "Selin Yıldırım",
        date: "2024-02-05",
        content: `
          Vue 3, Composition API ile reactive programlama konusunda güçlü özellikler sunar.
          
          ## Composition API
          Options API'den Composition API'ye geçiş ve avantajları.
          
          ## Reactive References
          ref ve reactive kullanımı ve farkları.
          
          ## Computed Properties
          Computed properties ve watchers ile reaktif veri yönetimi.
        `
      }
  ];