import { createLazyFileRoute } from '@tanstack/react-router'
import { H, Main, Section } from 'midashi'

const component = () => (
  <>
    <H>Heading 1</H>
    <Main>
      <H>Heading 2</H>
      <Section>
        <H>Heading 3</H>
        <Section>
          <H>Heading 4</H>
          <Section>
            <H>Heading 5</H>
            <Section>
              <H>Heading 6</H>
            </Section>
          </Section>
        </Section>
      </Section>
    </Main>
  </>
)

export const Route = createLazyFileRoute('/midashi')({
  component,
})
