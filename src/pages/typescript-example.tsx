import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './typescript-example.module.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TypeScriptExample(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'TypeScriptの型定義を学ぶ', completed: true },
    { id: 2, text: 'Reactコンポーネントを型安全に作る', completed: false },
    { id: 3, text: 'カスタムフックを実装する', completed: false },
  ]);

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <Layout title="TypeScript Example" description="TypeScript with Docusaurus">
      <main className={styles.main}>
        <h1>TypeScript実装例</h1>
        <p>このページはTypeScriptで実装されています。</p>
        
        <div className={styles.taskList}>
          <h2>タスクリスト（{completedCount}/{tasks.length} 完了）</h2>
          <ul>
            {tasks.map((task) => (
              <li 
                key={task.id}
                className={clsx(styles.task, task.completed && styles.completed)}
                onClick={() => toggleTask(task.id)}
              >
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  readOnly
                />
                <span>{task.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.benefits}>
          <h2>TypeScriptの利点</h2>
          <ul>
            <li>型安全性によるバグの早期発見</li>
            <li>IDEの強力な自動補完</li>
            <li>リファクタリングの安全性</li>
            <li>コードの自己文書化</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}