import { Flex, Box } from '@chakra-ui/react'; 

function Footer() {
  return (
    <Box>
      <footer className="footer">
        <div className="footer-content">
          <Flex
            justify="space-between"
            direction={['column', 'row']}
            alignItems="center"
            gap="1rem"
            mt="1"
          >
            <div className="footer-logo">©2024 Norah Castillo</div>
            <Flex alignItems="center" justifyContent="center">
              <div>
                <a href="https://athletexelite.com" target="_blank" rel="noopener noreferrer" className="tilt-prism-footer">
                  Athlete X Elite | 1/1
                </a>
              </div>
            </Flex>
          </Flex>
        </div>
      </footer>
    </Box>
  );
}

export default Footer;