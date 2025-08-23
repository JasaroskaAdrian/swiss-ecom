const modules = import.meta.glob('../scripts/*.js', { eager: true })
import '../styles/styles.css';  // <-- IMPORTANT


for (const path in modules) {
  console.log(`Loaded: ${path}`);
}

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('♻️ Frontend updated via HMR');
    })
}