import { Header } from './components/Header';
import { Sideber } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';

import Post from './components/Post';

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sideber />
        <main>
          <Post 
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima recusandae, reprehenderit sequi totam voluptas eligendi fugiat quaerat maxime tempore impedit nemo earum officia! Nobis obcaecati eveniet, laboriosam dolorem aliquam magnam!'
          />
        </main>

      </div>
    </div>
  )
}

