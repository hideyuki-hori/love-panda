'use client'

import { useCallback, useState } from 'react'
import { css, cx } from '~/styled-system/css'
import { Flex } from '~/styled-system/jsx'
import { badgeRecipe, BadgeRecipeVariant } from '~/styled-system/recipes'

type Status = BadgeRecipeVariant['status']

const statuses: Status[] = ['neutral', 'info', 'success', 'error']

export default function Home() {
  const [current, setCurrent] = useState<Status>('neutral')
  const updateAs = useCallback(
    (status: Status) => () => setCurrent(status),
    [setCurrent],
  )

  return (
    <main className={css({
      py: 10,
    })}>
      <Flex width='full' justifyContent='center' gap={2}>
        {statuses.map(status => (
          <button
            key={status}
            onClick={updateAs(status)}
            className={cx(
              badgeRecipe({
                status: status,
                kind: current === status ? 'solid' : 'outline',
              }),
              css({
                cursor: 'pointer',
              }),
            )}
          >
            {status}
          </button>
        ))}
      </Flex>
    </main>
  )
}
