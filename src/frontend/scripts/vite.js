const modules = import.meta.glob('../scripts/*.js', { eager: true })

for (const path in modules) {
  console.log(`Loaded: ${path}`);
}

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('♻️ Frontend updated via HMR');
    })
}